import MainAllData from "../Components/MainAllData";
import TopLabel from "../Components/TopLabel"
import Products from './Products';
import IssueBooks from "../Components/IsssueBook";


const Shipments = () => { 
    return (
    <>
      <IssueBooks label="Book Issue List" isBtnHide={true} texts={['Customer', 'Data', 'Shipment #', 'Sales Order #', 'Package #', 'Tracking #', 'Carrier', 'Status', 'Shipment Rate']} btnContent={["Filter"]} lastBtn={true} editBtn={["Delete"]} detailedBtn={true} link={true} detailBtn={true} border="1px solid #118CF0" color="#118CF0" addRoutes1="/issue"/>
    </>
    )
  };
  
  export default Shipments;