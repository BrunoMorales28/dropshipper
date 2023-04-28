import { Box, Button, ImageList, ImageListItem } from "@mui/material";
import productItem from "../../mock/product.json";
import { useState } from "react";

const ImageScroller = ({ imageList }: { imageList: string[] }) => {
  const [mainImage, setMainImage] = useState(imageList[0]);

  const setPortrait = (imgUrl: string) => {
    setMainImage(imgUrl);
  };

  return (
    <section>
      <Box
        sx={{
          marginX: 3,
          height: "400px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          src={mainImage}
          alt="product"
        />
      </Box>
      <ImageList cols={3} gap={4}>
        {productItem.imgs.map((imageUrl, i) => (
          <ImageListItem key={imageUrl + i}>
            <Button
              sx={{
                height: "100%",
                padding: 1,
                border: imageUrl === mainImage ? "1px solid black" : "none",
              }}
              onClick={() => setPortrait(imageUrl)}
            >
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src={imageUrl}
                alt="product"
              />
            </Button>
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
};

export default ImageScroller;
