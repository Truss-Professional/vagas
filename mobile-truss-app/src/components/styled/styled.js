import styled from "styled-components";

//lista

export const ButtonContainer = styled.div`
  margin: 10px;
  button {
  color: black;
  text-decoration: none;
  list-style: none;
  margin: 5px;
  padding: 10px;
  }
`;

export const DetailsFlexBox = styled.div`
  color: white;
  background-color: #5F6B6B;
  border-radius: 20px;
  height: 459px;
  width: 290px;
  padding: 30px;
  box-shadow: 3px 3px 3px 3px black;

  button {
    height: 50px;
    width: 90px;
    margin: 7px;
    border-radius: 10px;

    :hover {
      cursor: pointer;
      background-color:  #5F6B6B;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  padding-top: 30%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`

export const InputRadio = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-top: 5px;
`

export const ContainerInput = styled.div`
  margin-top: 5px;
`
export const ImagemInput = styled.div`
  margin: 5px 0 5px;
  :hover {
    cursor: pointer;
    background-color:  #5F6B6B;
  }
`

export const InputDate = styled.div`
  margin-top: 10px;
`