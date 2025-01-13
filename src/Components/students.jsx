import { useState } from "react";
import TopLabel from "../Components/TopLabel";
import InventoryDetailList from "../Components/students1";
import BottomPaginationContainer from "../Components/BottomPaginationContainer";
import img1 from '../assets/student1.jpeg';
import img2 from '../assets/student2.jpeg';
import img3 from '../assets/student3.jpeg';
import img4 from '../assets/student4.jpeg';
import img5 from '../assets/student5.jpeg';

const Students = ({
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
      Name: "Chethan Kumar",
      ID: "STU-001",
      Course: "Stastistics",
      Gender: "Male",
      Age: 21,
      Phone: "9876543210",
      image: img1,
    },
    {
      Name: "Aarushi Verma",
      ID: "STU-002",
      Course: "Mathematics",
      Gender: "Female",
      Age: 22,
      Phone: "8765432109",
      image: img2,
    },
    {
      Name: "Ravi Teja",
      ID: "STU-003",
      Course: "Physics",
      Gender: "Male",
      Age: 20,
      Phone: "7654321098",
      image: img3,
    },
    {
      Name: "Priya Singh",
      ID: "STU-004",
      Course: "Chemistry",
      Gender: "Female",
      Age: 23,
      Phone: "6543210987",
      image: img4,
    },
    {
      Name: "Arjun Reddy",
      ID: "STU-005",
      Course: "Biology",
      Gender: "Male",
      Age: 21,
      Phone: "5432109876",
      image: img5,
    },
    {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
      },
      {
        Name: "Chethan Kumar",
        ID: "STU-001",
        Course: "Stastistics",
        Gender: "Male",
        Age: 21,
        Phone: "9876543210",
        image: img1,
      },
      {
        Name: "Aarushi Verma",
        ID: "STU-002",
        Course: "Mathematics",
        Gender: "Female",
        Age: 22,
        Phone: "8765432109",
        image: img2,
      },
      {
        Name: "Ravi Teja",
        ID: "STU-003",
        Course: "Physics",
        Gender: "Male",
        Age: 20,
        Phone: "7654321098",
        image: img3,
      },
      {
        Name: "Priya Singh",
        ID: "STU-004",
        Course: "Chemistry",
        Gender: "Female",
        Age: 23,
        Phone: "6543210987",
        image: img4,
      },
      {
        Name: "Arjun Reddy",
        ID: "STU-005",
        Course: "Biology",
        Gender: "Male",
        Age: 21,
        Phone: "5432109876",
        image: img5,
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
              texts={["Name", "ID", "Course", "Gender", "Age", "Phone No"]}
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
                  item.ID,
                  item.Course,
                  item.Gender,
                  item.Age.toString(),
                  item.Phone,
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

export default Students;
