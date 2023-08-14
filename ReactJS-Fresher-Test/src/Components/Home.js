const Home = () => {
  return (
    <div className="home-container">
      <div className="mt-3">
        Yêu cầu:
        <br />
        Sử dụng API từ trang web http://reqres.in/ để tạo website.
      </div>
      <div>
        Sử dụng thư viện React để tạo một màn hình Website cơ bản bao gồm các
        chức năng:
      </div>
      <ul>
        <li>1. Đăng nhập</li>
        <li>2. Thêm user</li>
        <li>3. Sửa user</li>
        <li>4. Xóa user</li>
        <li>5. Hiển thị tất cả các user</li>
        <li>6. Tìm kiếm user theo ID</li>
        <li>7. Sắp xếp theo FirstName</li>
        <li>8. Import user từ file .csv</li>
        <li>9. Export user ra file .csv</li>
      </ul>
      <div>
        Tự do tùy chỉnh HTML, CSS để có một Website nhẹ nhàng, khoa học và thẩm
        mỹ.
      </div>
      <div>
        Commit và đẩy source code lên github public
        <br />
        Triển khai Website lên Heroku để demo
      </div>
      <br />
      <b>Result: </b>
      Thời gian hoàn thành: 1-3 ngày
      <br />
      Gửi link Heroku và link Github lại email này
      <br />
      Thời gian phản hồi 2 ngày làm việc kể từ ngày nhận được bài thi
      <br />
      Yêu cầu backend (optional - không bắt buộc):
      <br />
      Sử dụng Python Django Rest Framework, tạo các API như trên trang web:
      https://reqres:in/
    </div>
  );
};

export default Home;
