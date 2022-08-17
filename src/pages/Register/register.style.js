import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 40px;

  margin-bottom: 8px;

  img {
    width: 122.06px;
    height: 21.21px;

    margin-right: 175px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 4px;

    width: 67.49px;
    height: 40.11px;

    background: #343B41;

    border-radius: 4px;
    border: none;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 20px;
  gap: 22px;

  width: 370px;
  height: 730px;

  background: #212529;

  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  span{
    position: relative;
    bottom: 49.5px;
    left: 355px;

    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;

    width: 110%;

    margin-bottom: -35px;

    border-radius: 5px;
    background-color: #868E96;

    color: #F8F9FA;
}

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;

    color: #F8F9FA;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: #868E96;
  }

  label {
    width: 100%;
   
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 0px;

    margin-top: 5px;
    margin-bottom: -8px;

    color: #F8F9FA;
  }

  input {
    display: flex;
    align-items: center;

    width: 329.93px;
    height: 48px;

    background: #868E96;

    border: 1.2182px solid #868E96;
    border-radius: 4px;
  }

  select {
    display: flex;
    align-items: center;

    padding: 0px 10px;

    width: 330px;
    height: 48px;

    background: #868E96;
    color: #F8F9FA;

    border: 1.2182px solid #868E96;
    border-radius: 4px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 326px;
    height: 48px;

    color: #F8F9FA;
    background: #59323F;

    border: 1.2182px solid #59323F;
    border-radius: 4px;
  }
`;

export const ModalSucess = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 286px;
  height: 69px;
  left: 82.5%;
  top: 1%;

  background: #343B41;
  border-radius: 4px;

  p {
      position: relative;
    top: 9px;
    right: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #F8F9FA;
  }

  .fig {
    position: relative;
    top: 8px;
    right: 30px;

    width: 28px;
    height: 28px;

    color: #3FE864;
    background-color: #F8F9FA;

    border: 1px;
    border-radius: 50%;
  }

  img {
    position: relative;
    top: 25.5px;
    right: 40px;

    width: 206px;
    height: 6px;

    background: #3FE864;
    border-radius: 0px 0px 0px 4px;
  }

  button{
    position: relative;
    bottom: 33px;
    left: 125px;

    background-color: transparent;
    border: none;
  }

  .btnClose {
    font-size: 20px;
    font-weight: 500;

    color: #868E96;
  }
`;

export const ModalError = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  position: absolute;
  width: 286px;
  height: 69px;
  left: 82.5%;
  top: 11%;

  background: #343B41;
  border-radius: 4px;

  p {
    position: relative;
    top: 9px;
    right: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #F8F9FA;
  }

  .fig {
    position: relative;
    top: 8px;
    right: 30px;

    width: 28px;
    height: 28px;

    color: #E83F5B;
    background-color: #F8F9FA;

    border: 1px;
    border-radius: 50%;
  }

  img {
    position: relative;
    top: 26.5px;
    right: 40px;

    width: 206px;
    height: 6px;

    background: #3FE864;
    border-radius: 0px 0px 0px 4px;
  }

  button{
    position: relative;
    bottom: 33px;
    left: 125px;

    background-color: transparent;
    border: none;
  }

  .btnClose {
    font-size: 20px;
    font-weight: 500;

    color: #868E96;
  }
`;
