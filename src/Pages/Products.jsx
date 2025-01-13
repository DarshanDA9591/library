import MainAllData from "../Components/MainAllData";

const Products = () => {
  return (
    <>
      <MainAllData label="Books" isBtnHide={true} texts={['image','Name', 'Author', 'Serial Number', 'Category', 'Availability', 'Rate']} btnContent={["Filter","new"]} optionInput={false} link={true} lastBtn={false} detailBtn={true} border="1px solid #118CF0" color="#118CF0" addRoutes1="/add" />
    </>
  );
};

export default Products;
