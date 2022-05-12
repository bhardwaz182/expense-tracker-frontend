import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import DataCard from "./Card";
import { Card, Tabs, Tab, Container } from "react-bootstrap";
import Split from "./Split";

const Page = () => {
  const [data, setData] = useState([]);
  const [includedData, setIncludedData] = useState({
    what: "",
    who: "Bhardwaz",
    when: "11-05-2022",
    cost: 0,
    included: [
      {
        name: "Bhardwaz",
        value: true,
        cost: 0,
      },
      {
        name: "Yunus",
        value: true,
        cost: 0,
      },
      {
        name: "Hemanth",
        value: true,
        cost: 0,
      },
      {
        name: "Praneeth",
        value: true,
        cost: 0,
      },
      {
        name: "Jayanth",
        value: true,
        cost: 0,
      },
      {
        name: "Dileep",
        value: true,
        cost: 0,
      },
      {
        name: "Teja",
        value: true,
        cost: 0,
      },
      {
        name: "Ram",
        value: true,
        cost: 0,
      },
      {
        name: "Pranav",
        value: true,
        cost: 0,
      },
    ],
  });
  const [editData, setEditData] = useState([]);


  const formChange = (event, index) => {
    const newArr = { ...includedData };
    if (index === "what") {
      newArr.what = event.target.value;
    } else if (index === "who") {
      newArr.who = event.target.value;
      newArr.included.map((item) =>
        item.name === newArr.who ? (item.cost = newArr.cost) : (item.cost = 0)
      );
    } else if (index === "cost") {
      newArr.cost = event.target.value;
      newArr.included.map((item) =>
        item.name === newArr.who ? (item.cost = newArr.cost) : ""
      );
    } else {
      event.target.value === "on"
        ? (newArr.included[index]["value"] = event.target.checked)
        : (newArr.included[index].cost = event.target.value);
    }
    setIncludedData(newArr);
  };

  const editFormChange = (event, index) => {
    const newArr = { ...editData };
    if (index === "what") {
      newArr.what = event.target.value;
    } else if (index === "who") {
      newArr.who = event.target.value;
      newArr.included.map((item) =>
        item.name === newArr.who ? (item.cost = newArr.cost) : (item.cost = 0)
      );
    } else if (index === "cost") {
      newArr.cost = event.target.value;
      newArr.included.map((item) =>
        item.name === newArr.who ? (item.cost = newArr.cost) : ""
      );
    } else {
      event.target.value === "on"
        ? (newArr.included[index]["value"] = event.target.checked)
        : (newArr.included[index].cost = event.target.value);
    }
    setEditData(newArr);
  };

  const onEdit = (id) => {
    data.length &&
      data.map((item) => {
        if (item._id === id) {
          setEditData(item);
        }
        return 1;
      });
  };

  const afterEdit = (id) => {
    const newArr = { ...editData };
    delete newArr._id;
    const newDataArr = [];
    data.map((item) => {
      if (item._id === editData._id) {
        newDataArr.push({ ...editData });
      } else {
        newDataArr.push(item);
      }
      return 0;
    });
    setData(newDataArr);
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/workshops/update/${id}`, newArr)
      .then((res) => res.data);
    setEditData([]);
  };
  
  const stopEdit = () => {
    setEditData([]);
  };
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/workshops`).then((res) => {
      setData(res.data);
    });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/workshops/delete/${id}`)
      .then((res) => {
        if (res.status) {
          const newData = [];
          data.map((item) => {
            if (item._id !== id) {
              newData.push(item);
            }
            return 1;
          });
          setData(newData);
        }
      });
  };

  const onSubmit = () => {
    const newObj = { ...includedData };
    const newArr = [];
    newObj.included.map((item) => {
      if (item.value) {
        newArr.push(item);
      }
      return 0;
    });
    newObj.included = newArr;
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/workshops/post`, newObj)
      .then((res) => {
        setData([...data, res.data]);
      });
  };

  return (
    <>
      <Tabs defaultActiveKey="home" className="tab">
        <Tab eventKey="home" title="Home">
          <Form
            includedData={includedData}
            formChange={formChange}
            onSubmit={onSubmit}
          />
          <Container>
            {data &&
                data.map((item) => {
                return item._id === editData._id ? (
                    <Card className="card">
                    <Form
                        includedData={editData}
                        formChange={editFormChange}
                        afterEdit={afterEdit}
                        stopEdit={stopEdit}
                        onDelete={onDelete}
                    />
                    </Card>
                ) : (
                    <DataCard {...item} onEdit={onEdit} />
                );
                })}
            </Container>
        </Tab>
        <Tab eventKey="distribution" title="Distribution" ><Split data={data}/></Tab>
      </Tabs>
    </>
  );
};

export default Page;
