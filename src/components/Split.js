import React from "react";
import { Table } from "react-bootstrap";

const Split = ({ data }) => {
  const temp1 = {
    Bhardwaz: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Yunus: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Hemanth: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Praneeth: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Jayanth: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Dileep: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Teja: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Ram: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
    Pranav: {
      Bhardwaz: 0,
      Yunus: 0,
      Hemanth: 0,
      Praneeth: 0,
      Jayanth: 0,
      Dileep: 0,
      Teja: 0,
      Ram: 0,
      Pranav: 0,
    },
  };
  const members = [
    "Bhardwaz",
    "Yunus",
    "Hemanth",
    "Praneeth",
    "Jayanth",
    "Dileep",
    "Teja",
    "Ram",
    "Pranav",
  ];

  data.map((item) => {
    const share = item.cost / item.included.length;
    const afterShare = item.included.map((item) => ({
      ...item,
      cost: item.cost - share,
    }));
    // console.log(afterShare);
    afterShare.map((item) => {
      if (item.cost < 0) {
        afterShare.map((item1) => {
          if (item.name !== item1.name && item1.cost > 0) {
            if (item1.cost >= -item.cost) {
              item1.cost = item1.cost + item.cost;
              temp1[item.name][item1.name] += item.cost;
              temp1[item1.name][item.name] += -item.cost;
              item.cost = 0;
            } else {
              item.cost = item1.cost + item.cost;
              temp1[item.name][item1.name] += -item1.cost;
              temp1[item1.name][item.name] += item1.cost;
              item1.cost = 0;
            }
          }
          return 0;
        });
      }
      return 0;
    });
    return 0;
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>Members</th>
          <th>Split</th>
        </tr>
      </thead>
      <tbody>
        {members.map((item) => (
          <tr>
            <td>{item}</td>
            {
              <td>
                {members.map((item1) => (
                  <div>
                    <div style={{ display: "inline-block", width: "6rem" }}>
                      {item1}
                    </div>{" "}
                    :{" "}
                    <div
                      style={{
                        display: "inline-block",
                        color: `${temp1[item][item1] < 0 ? "red" : "green"}`,
                      }}
                    >
                      {temp1[item][item1]}
                    </div>
                  </div>
                ))}
              </td>
            }
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Split;
