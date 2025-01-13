import { useState } from "react";
import TopLabel from "../Components/TopLabel";
import InventoryDetailList from "../Components/InventoryDetailList";
import BottomPaginationContainer from "../Components/BottomPaginationContainer";
import img1 from '../assets/dbBook.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img2.jpg'


const MainAllData = ({
  label,
  isBtnHide,
  texts = [],
  btnContent = [],
  editBtn = [],
  lastBtn,
  optionInput,
  detailedBtn,
  border,
  onClick,
  link,
  detailBtn = "false",
  color = "#000",
  addRoutes1
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Dummy data with images
  const dummyData = [
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    {
      Name: "Introduction to Algorithms",
      Author: "Thomas H. Cormen",
      "Serial Number": "SN-001",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 45.99",
      image:img1, // Image URL
    },
    {
      Name: "Database System Concepts",
      Author: "Abraham Silberschatz",
      "Serial Number": "SN-002",
      Category: "Computer Science",
      Availability: "In Stock",
      Rate: "Rs 50.99",
      image: img2, // Image URL
    },
    {
      Name: "Advanced Engineering Mathematics",
      Author: "Erwin Kreyszig",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "Out of Stock",
      Rate: "Rs 40.50",
      image: img3, // Image URL
    },
    {
      Name: "Advanced Engineering Chemistry",
      Author: "Erwin Lorense",
      "Serial Number": "SN-003",
      Category: "Mathematics",
      Availability: "In Stock",
      Rate: "Rs 40.50",
      image: img4, // Image URL
    },
    // Add more book entries here...
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex flex-col items-center w-full h-full justify-start box-border pr-[3%] pb-[3%] bg-[#F8F9FF]">
      <TopLabel
        label={label}
        isBtnHide={isBtnHide}
        color={color}
        backgroundColor="#fff"
        paddingBlock="14px"
        borderBottom="none"
        optionInput={optionInput}
        btnContent={btnContent}
        link={link}
        detailBtn={detailBtn}
        border={border}
        onClick={onClick}
        addRoutes1={addRoutes1}
        
      />
      <div className="flex flex-col w-full overflow-auto items-center justify-between box-border">
        <div className="flex flex-col w-full h-full overflow-auto items-center justify-start box-border">
          <div className="flex flex-col w-full cursor-pointer box-border">
            <InventoryDetailList
              texts={["Name", "Author", "Serial Number", "Category", "Availability", "Rate"]}
              width="11vw"
              borderTop="1px solid #118cf0"
              fontSize="2.3vh"
            />
          </div>
          <div className="flex flex-col w-full box-border overflow-auto cursor-pointer">
            {currentItems.map((item, index) => (
              <InventoryDetailList
                key={index}
                texts={[
                  item.Name,
                  item.Author,
                  item["Serial Number"],
                  item.Category,
                  item.Availability,
                  item.Rate,
                ]}
                image={item.image} // Pass the image prop
                width="11vw"
                fontWeight="400"
                fontSize="2vh"
                lastBtn={lastBtn}
                editBtn={editBtn}
                detailBtn={detailBtn}
                border="1px solid #118CF0"
                color="#fff"
                detailedBtn={detailedBtn}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          <BottomPaginationContainer
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            inventoryItems={dummyData}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default MainAllData;
