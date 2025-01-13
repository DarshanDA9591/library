import { useState } from "react";
import TopLabel from "../Components/TopLabel";
import InventoryDetailList from "../Components/IssueBooks1";
import BottomPaginationContainer from "../Components/BottomPaginationContainer";
import img1 from '../assets/student1.jpeg';
// import img2 from '../assets/student2.jpeg';
// import img3 from '../assets/student3.jpeg';
// import img4 from '../assets/student4.jpeg';
// import img5 from '../assets/student5.jpeg';
import img1q from '../assets/dbBook.jpg'
import img2q from '../assets/img2.jpg'
import img3q from '../assets/img3.jpeg'
import img4q from '../assets/img2.jpg'

const IssueBooks = ({
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
  addRoutes1,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Dummy data for students with images
  const dummyData = [
    {
      Book_Name: "Mathematics",
      Book_ID: "00AHG58",
      Student_name :"Chethan Kumar",
      Student_id:"STU-001",
      Bimage: img1q,
      IssuedDate:"24/01/2025",
      dueDate:"04/05/2025"
    },
    {
        Book_Name: "Data Structure",
        Book_ID: "00AHG58",
        Student_name :"Varun Kumar",
        Student_id:"STU-002",
        Bimage: img2q,
        IssuedDate:"24/08/2025",
        dueDate:"15/05/2025"
    },
    {
        Book_Name: "Mathematics",
        Book_ID: "00AHG58",
        Student_name :"Chethan Kumar",
        Student_id:"STU-001",
        Bimage: img1q,
        IssuedDate:"24/01/2025",
        dueDate:"04/05/2025"
      },
      {
          Book_Name: "Data Structure",
          Book_ID: "00AHG58",
          Student_name :"Varun Kumar",
          Student_id:"STU-002",
          Bimage: img2q,
          IssuedDate:"24/08/2025",
          dueDate:"15/05/2025"
      },    {
        Book_Name: "Mathematics",
        Book_ID: "00AHG58",
        Student_name :"Chethan Kumar",
        Student_id:"STU-001",
        Bimage: img1q,
        IssuedDate:"24/01/2025",
        dueDate:"04/05/2025"
      },
      {
          Book_Name: "Data Structure",
          Book_ID: "00AHG58",
          Student_name :"Varun Kumar",
          Student_id:"STU-002",
          Bimage: img2q,
          IssuedDate:"24/08/2025",
          dueDate:"15/05/2025"
      },    {
        Book_Name: "Mathematics",
        Book_ID: "00AHG58",
        Student_name :"Chethan Kumar",
        Student_id:"STU-001",
        Bimage: img1q,
        IssuedDate:"24/01/2025",
        dueDate:"04/05/2025"
      },
      {
          Book_Name: "Data Structure",
          Book_ID: "00AHG58",
          Student_name :"Varun Kumar",
          Student_id:"STU-002",
          Bimage: img2q,
          IssuedDate:"24/08/2025",
          dueDate:"15/05/2025"
      },    {
        Book_Name: "Mathematics",
        Book_ID: "00AHG58",
        Student_name :"Chethan Kumar",
        Student_id:"STU-001",
        Bimage: img1q,
        IssuedDate:"24/01/2025",
        dueDate:"04/05/2025"
      },
      {
          Book_Name: "Data Structure",
          Book_ID: "00AHG58",
          Student_name :"Varun Kumar",
          Student_id:"STU-002",
          Bimage: img2q,
          IssuedDate:"24/08/2025",
          dueDate:"15/05/2025"
      },
    // Add more student entries as needed
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
              texts={["Book Name", "Book ID", "Student Name", "Student ID", "Issued Date", "Due Date"]}
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
                  item.Book_Name,
                  item.Book_ID,
                  item.Student_name,
                  item.Student_id,
                   item.IssuedDate.toString(),
                   item.dueDate,
                ]}
                image={item.Bimage} // Pass the image prop
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

export default IssueBooks;
