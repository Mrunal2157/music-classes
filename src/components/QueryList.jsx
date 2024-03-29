import React, { useEffect, useState } from "react";
import db, {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from "../utils/firebase";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import verifyUser from "@/lib/verifyUser";
const QueryList = () => {
  const [queryList, setQueryList] = useState([]);
  const [userVerified, setUserVerified] = useState(false);
  const [user, setUser] = useState({});
  const fetch = async () => {
    const resArray = [];
    const q = query(collection(db, "queries"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      resArray.push(doc.data());
    });
    console.log(resArray);
    setQueryList(resArray);
  };

  const onSubmit = async () => {
    if (verifyUser(user)) {
      setUserVerified(true);
      fetch();
    } else {
      alert("Invalid credentials");
    }
  };

  // useEffect(() => {
  //   fetch();
  // }, []);

  return (
    <div className="w-full flex justify-center items-center min-h-screen ">
      {!userVerified && (
        <div className="w-1/2 md:w-full p-2 space-y-4 flex flex-col justify-center">
          <Input
            type="text"
            name="email"
            placeholder="email"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, email: e.target.value };
              })
            }
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => {
                return { ...prev, password: e.target.value };
              })
            }
            required
          />
          <Button onClick={onSubmit} type="button">
            Submit
          </Button>
        </div>
      )}
      {userVerified && (
        <div className="w-[70%] md:w-[90%] h-[70%] overflow-y-auto">
          <Table className="border rounded-md">
            <TableHeader>
              <TableRow>
                <TableHead className="">Name</TableHead>
                <TableHead>E-Mail</TableHead>
                <TableHead>Query Message</TableHead>
                <TableHead className="">Created At</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queryList.map((query) => (
                <TableRow key={query.createdAt.toString()}>
                  <TableCell className="font-medium">{query.name}</TableCell>
                  <TableCell>{query.email}</TableCell>
                  <TableCell>{query.queryText}</TableCell>
                  <TableCell className="">
                    {Date(query.createdAt).toString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default QueryList;
