import React, { Component } from "react";
import styled from "styled-components";
const StyledWrapper = styled.div`
/* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  width: 100%;
}

tr:nth-child(even) {
  background-color: #dddddd;
} */
table, th, td {
  border: 1px solid black;
}
`;
import Information from "./info-json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const styleInfo = {
      paddingRight: "10px",
    };
    const elementStyle = {
      border: "solid",
      borderRadius: "10px",
      position: "relative",
      left: "10vh",
      height: "3vh",
      width: "20vh",
      marginTop: "5vh",
      marginBottom: "10vh",
    };
    
    const items = Information.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.country.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <StyledWrapper key={data.id}>
          <table class="w3-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>{data.name}</td>
                <td>{data.age}</td>
                <td>{data.country}</td>
              </tr>
            </tbody>
          </table>
          {/* <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.name}</span>
            <span style={styleInfo}>{data.age}</span>
            <span style={styleInfo}>{data.country}</span>
          </li>
        </ul> */}
        </StyledWrapper>
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="Enter item to be searched"
          style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        {items}
      </div>
    );
  }
}

export default App;
