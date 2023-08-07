import "./Product.scss";
import snicker1 from "../../assets/image/snicker1.jpg";
import snicker2 from "../../assets/image/snicker2.jpg";
import snicker3 from "../../assets/image/snicker3.jpg";
import snicker4 from "../../assets/image/snicker4.jpg";
import { useState } from "react";
import Lightbox from "react-image-lightbox";

const images = [snicker1, snicker2, snicker3, snicker4];
const Product = () => {
  const [currentUpImg, setCurrentUpImg] = useState(snicker1);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleClickPreviewImg = () => {
    let index = images.findIndex((item) => item === currentUpImg);
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className="product-container">
        <div className="content-left">
          <div className="img-up">
            <img src={currentUpImg} onClick={() => handleClickPreviewImg()} alt="snicker"/>
          </div>
          <div className="img-down">
            <div className="img-small">
              <img
                src={snicker1}
                onClick={() => setCurrentUpImg(snicker1)}
                className={currentUpImg === snicker1 ? "active" : ""}
                alt="snicker"
              />
            </div>
            <div className="img-small">
              <img
                src={snicker2}
                onClick={() => setCurrentUpImg(snicker2)}
                className={currentUpImg === snicker2 ? "active" : ""}
                alt="snicker"
              />
            </div>
            <div className="img-small">
              <img
                src={snicker3}
                onClick={() => setCurrentUpImg(snicker3)}
                className={currentUpImg === snicker3 ? "active" : ""}
                alt="snicker"
              />
            </div>
            <div className="img-small">
              <img
                src={snicker4}
                onClick={() => setCurrentUpImg(snicker4)}
                className={currentUpImg === snicker4 ? "active" : ""}
                alt="snicker"
              />
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="title">Giày chạy bộ nam New Balance - M860E11</div>
          <div className="price">3.695.000 ₫</div>
          <div className="size">Size: 30</div>
          <div className="action">
            <label className="quantity">Số lượng</label>
            <input type="number" min={1} value={1} />
            <button className="buy">Chọn mua</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          animationDuration={500}
        />
      )}
    </div>
  );
};

export default Product;
