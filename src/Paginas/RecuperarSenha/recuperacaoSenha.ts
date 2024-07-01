import styled from "styled-components"
export const Container = styled.div.attrs({className: 'container'})`
  
  .container1 {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 500px;
    height: 500px;
  }
  
  .container1 h2 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #333;
  }
  
  .container1 p {
    margin-bottom: 20px;
    color: #666;
  }
  
  .container1 input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border-style: none;
    border-radius: 5px;
    background-color: #E1E1E1;
    font-size: 16px;
  }
  
  .container1 button {
    background-color: #F38342;
    color: white;
    width: 150px;
    height: 40px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .container1 button:hover {
    background-color: #e65c00;
  }
`