import ListProducts from "../../ListProducts";
import useAxios from "../../../../hooks/useAxios";
import ProductFilterSidebar from "../../../../components/ProductFilterSidebar";

const MenSweeter = () => {
  // eslint-disable-next-line no-undef
  const qs = require("qs");

  const queryObject = {
    populate: [
      "product_size_colors.color",
      "product_size_colors.size",
      "product_size_colors.product_image.img_1",
      "product_size_colors.product_image.img_2",
      "product_size_colors.product_image.img_3",
      "product_size_colors.product_image.img_4",
    ],
  };

  const query = qs.stringify(queryObject, { encodeValuesOnly: true });

  const { data, loading, error } = useAxios(`products?${query}`);

  console.log(data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container flex gap-8">
      {/* Filter Sidebar */}
      <ProductFilterSidebar />
      {/* List Products */}
      <ListProducts data={data.data} />
    </div>
  );
};

export default MenSweeter;
