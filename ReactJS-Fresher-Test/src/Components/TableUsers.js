import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { fetchAllUsers } from "../Service/UserService";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";
import ModalEditUser from "./ModalEditUser";
import _, { debounce } from "lodash";
import ModalConfirm from "./ModalConfirm";
import "./TableUser.scss";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { toast } from "react-toastify";

const TableUsers = () => {
  const [listUsers, setListUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [showModalAddNew, setShowModalAddNew] = useState(false);

  const [dataUserEdit, setDataUserEdit] = useState({});
  const [showModalEdit, setShowModalEdit] = useState(false);

  const [showModalDelete, setShowModalDelete] = useState(false);
  const [dataUserDelete, setDataUserDelete] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  const [keyword, setKeyword] = useState("");

  const [dataExport, setDataExport] = useState([]);

  const getUsers = async (page) => {
    let res = await fetchAllUsers(page);

    if (res && res.data) {
      setTotalUsers(res.total);
      setListUsers(res.data);
      setTotalPages(res.total_pages);
    }
  };

  useEffect(() => {
    // Call API to Fetch Data
    getUsers(1);
  }, []);

  const handlePageClick = (event) => {
    getUsers(event.selected + 1);
  };

  const handleUpdateTable = (user) => {
    setListUsers([user, ...listUsers]);
  };

  const handleEditUser = (user) => {
    // Show Modal and Fill default data to input fields
    setShowModalEdit(true);
    setDataUserEdit(user);
  };

  const handleDeleteUser = (user) => {
    setShowModalDelete(true);
    setDataUserDelete(user);
  };

  const handleEditUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    let index = listUsers.findIndex((item) => item.id === user.id);
    cloneListUsers[index].first_name = user.first_name;
    setListUsers(cloneListUsers);
  };

  const handleDeleteUserFromModal = (user) => {
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = cloneListUsers.filter((item) => item.id !== user.id);
    setListUsers(cloneListUsers);
  };

  const handleSort = (sortBy, sortField) => {
    setSortBy("desc");
    setSortField("id");
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListUsers(cloneListUsers);
  };

  const handleSearch = debounce((event) => {
    let term = event.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listUsers);
      cloneListUsers = listUsers.filter((item) => item.email.includes(term));
      setListUsers(cloneListUsers);
    } else {
      getUsers(1);
    }
  }, 500);

  const getUsersExport = (event, done) => {
    let result = [];
    if (listUsers && listUsers.length) {
      result.push(["ID", "Email", "First Name", "Last Name", "Avatar"]);
      listUsers.map((item, index) => {
        let arr = [];
        arr[0] = item.id;
        arr[1] = item.email;
        arr[2] = item.first_name;
        arr[3] = item.last_name;
        arr[4] = item.avatar;
        result.push(arr);
      });

      setDataExport(result);
      done();
    }
  };

  const handleImportCSV = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (file.type !== "text/csv") {
        toast.error("Only CSV files are supported!");
        return;
      }

      Papa.parse(file, {
        header: true,
        complete: function (results) {
          let rawCSV = results.data;
          if (rawCSV.length) {
            if (rawCSV[0] && rawCSV[0].length === 3) {
              if (
                rawCSV[0][0] !== "email" &&
                rawCSV[0][1] !== "first_name" &&
                rawCSV[0][2] !== "last_name"
              ) {
                toast.error("Wrong format header!");
              } else {
                toast.success("File uploaded successfully!");
                let result = [];
                rawCSV.map((item, index) => {
                  if (index > 0 && item.length === 3) {
                    let obj = {
                      email: item[0],
                      first_name: item[1],
                      last_name: item[2],
                    };

                    result.push(obj);
                  }
                });
                setListUsers(result);
              }
            } else {
              toast.error("Wrong format CSV file!");
            }
          } else {
            toast.error("Not found data on CSV file!");
          }
        },
      });
    }
  };

  return (
    <>
      <div className="my-3 d-sm-flex justify-content-between align-items-center buttons">
        <span className="">
          <b>List Users:</b>
        </span>
        <div className="group-btn mt-sm-0 mt-2">
          <label htmlFor="test" className="btn btn-warning">
            <i className="fa-solid fa-file-import"></i>
            Import
          </label>
          <input
            type="file"
            id="test"
            hidden
            onChange={(event) => handleImportCSV(event)}
          />
          <CSVLink
            data={dataExport}
            filename={"users.csv"}
            className="btn btn-primary"
            asyncOnClick={true}
            onClick={getUsersExport}
          >
            <i className="fa-solid fa-file-export"></i>
            Export
          </CSVLink>
          <button
            className="btn btn-success"
            onClick={() => setShowModalAddNew(true)}
          >
            <i className="fa-solid fa-circle-plus"></i>
            Add New
          </button>
        </div>
      </div>

      <div className="col-12 col-sm-4 my-3">
        <input
          className="form-control"
          placeholder="Search user by email..."
          value={keyword}
          onChange={(event) => handleSearch(event)}
        />
      </div>

      <div class="customize-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <div className="sort-header">
                  <span>ID</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down-a-z"
                      onClick={() => handleSort("desc", "id")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up-z-a"
                      onClick={() => handleSort("asc", "id")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>Email</th>
              <th>
                <div className="sort-header">
                  <span>First Name</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down-a-z"
                      onClick={() => handleSort("desc", "first_name")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up-z-a"
                      onClick={() => handleSort("asc", "first_name")}
                    ></i>
                  </span>
                </div>
              </th>
              <th>
                <div className="sort-header">
                  <span>Last Name</span>
                  <span>
                    <i
                      className="fa-solid fa-arrow-down-a-z"
                      onClick={() => handleSort("desc", "last_name")}
                    ></i>
                    <i
                      className="fa-solid fa-arrow-up-z-a"
                      onClick={() => handleSort("asc", "last_name")}
                    ></i>
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {listUsers &&
              listUsers.length &&
              listUsers.map((item, index) => {
                return (
                  <tr key={`user-${index}`}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning mx-3"
                        onClick={() => handleEditUser(item)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteUser(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />

      <ModalAddNew
        show={showModalAddNew}
        setShow={setShowModalAddNew}
        handleUpdateTable={handleUpdateTable}
      />

      <ModalEditUser
        show={showModalEdit}
        setShow={setShowModalEdit}
        dataUserEdit={dataUserEdit}
        handleEditUserFromModal={handleEditUserFromModal}
      />

      <ModalConfirm
        show={showModalDelete}
        setShow={setShowModalDelete}
        dataUserDelete={dataUserDelete}
        handleDeleteUserFromModal={handleDeleteUserFromModal}
      />
    </>
  );
};

export default TableUsers;
