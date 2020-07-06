import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Input  } from 'antd';
import styled from "styled-components";
const StyledWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  /* ------------------------------------ Start header  ------------------------------------*/
  .container {
    max-width: 960px;
    width: 100%;
    margin: 0 auto;
  }
  header {
    width: 100%;
    height: 120px;
    background-color: #01273c;
    border-top: 5px solid #40aed7;
  }
  .nav-grid {
    display: grid;
    grid-template-columns: 225px 1fr;
  }
  .logo {
    color: white;
    margin-top: 20px;
  }
  h1 {
    color: white;
  }
  .logo h1 {
    font-size: 28px;
    text-transform: uppercase;
  }
  .logo span {
    font-size: 12px;
  }
  ul.menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin-top: 7%;
  }
  ul.menu li {
    text-decoration: none;
    list-style: none;
  }
  ul.menu li a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    transition: 0.3 ease-ease-in-out;
    padding: 5px 10px;
  }
  ul.menu li a:hover {
    background: #40aed7;
    padding: 5px 10px;
    border-radius: 5px;
  }
  /* ------------------------------------ End header  ------------------------------------*/

  /* ------------------------------------ Start section  ------------------------------------*/

  .content {
    margin: 0 auto;
    max-width: 960px;
    height: auto;
  }
  .content-heading {
  }
  /* ------------------------------------ End section  ------------------------------------*/
  /* ------------------------------------ Start Footer  ------------------------------------*/

  .copyright {
    width: 100%;
    height: 60px;
    background-color: #01273c;
  }
  .copyright-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 60px;
    color: white;
  }
  .copytext {
    justify-self: flex-start;
    align-self: center;
  }
  .creadit {
    justify-self: flex-end;
    align-self: center;
  }
  .content-heading img {
    width: 100%;
  }
  .nav li ul {
      position: absolute;
      display: none;
      width: inherit;
    }
  /* ------------------------------------ End Footer  ------------------------------------*/
  Input { 
      margin-top: 15%;
      margin-left: 35%;
      margin-bottom: 15%;
      width: 300px;
      padding-left: 10px;
  }
`;

const Index = () => {
    const [text,setText] = useState('')
    console.log(text)
    const checktext = (e) => {
        setText(e)
        
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];
      const onChange = (pagination, filters, sorter, extra) =>{
        console.log('params', pagination, filters, sorter, extra);
      }
  return (
    <StyledWrapper>
      <title>Homepage</title>
      {/*------------------------------------ Start Header ------------------------------------*/}
      <header>
        <nav>
          <div className="container">
            <div className="nav-grid">
              <div className="logo">
                <h1>Psu</h1>
                <span>Procurement system</span>
              </div>
              <div className="fr">
                <ul className="menu">
                  <li>
                    <a href="#">Add cart1</a>
                  </li>
                  <li>
                    <a href="#">Add cart1</a>
                  </li>
                  <li>
                    <a href="#">profile</a>
                    <ul>
                      <li>
                        <a href="#">ข้อมูลส่วนตัว</a>
                      </li>
                      <li>
                        <a href="#">ออกจากระบบ</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/*------------------------------------ End Header ------------------------------------*/}

      {/*------------------------------------ Start Section ------------------------------------*/}
      <section className="content">
        <div className="container">
          <div className="content-heading">
            {/* <img src="/static/images/bg.jpg" /> */}
          </div>
          <Input placeholder="Basic usage" onChange={ (e)=>{checktext(e.target.value)}}/>
          <Table columns={columns} dataSource={data} onChange={onChange} />
        </div>
      </section>
      {/*------------------------------------ End Section ------------------------------------*/}

      {/*------------------------------------ Start Footer ------------------------------------*/}
      <footer>
        <div className="copyright">
          <div className="container">
            <div className="copyright-grid">
              <div className="copytext">
                <p>Copyright © 2020 Jetnipat - All Rights Reserved</p>
              </div>
              <div className="creadit">
                <p>ccnp</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*------------------------------------ End Footer ------------------------------------*/}
      
    </StyledWrapper>
  );
};
export default Index;
