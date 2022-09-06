import React from "react";
import Account from "./Account";

const mainAccountList = [
  {
    name: "Anthony",
    userName: "bigby",
  },
  {
    name: "Jadon",
    userName: "crebbous",
  },
  {
    name: "Liam",
    userName: "lcmpbll",
  },
  {
    name: "Ben",
    userName: "CooperMalone",
  },
  {
    name: "Max",
    userName: "maxxity",
  }
];

function AccountList(){
  return (
    <React.Fragment>
      <hr/>
      <h5>Users you may know</h5>
      {mainAccountList.map((account, index) =>
        <Account name={account.name}
        userName={account.userName}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default AccountList;