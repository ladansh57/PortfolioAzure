import axios from "axios";

const ImagePage = async ({ params }) => {
  const { id } = params;
  const response = await axios.get(`https://picsum.photos/id/${id}/info`);
  const image = response.data;

  return (
    <div>
      <h1>Image by {image.author}</h1>
      <img
        src={image.download_url}
        alt={image.author}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default ImagePage;
