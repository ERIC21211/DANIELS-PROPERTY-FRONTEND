import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
} from "@nextui-org/react";

import { useState } from "react";
import Bungalow from "/workspaces/DANIELS-PROPERTY-FRONTEND/src/assets/Bungalow.png";
import Cottage from "/workspaces/DANIELS-PROPERTY-FRONTEND/src/assets/Cottage.png";
import Flat from "/workspaces/DANIELS-PROPERTY-FRONTEND/src/assets/Flat.png";
import Terraced from "/workspaces/DANIELS-PROPERTY-FRONTEND/src/assets/Terraced.png";
import { getpropertyData } from "../api/actions";



const propertyCard: React.FC = () => {
  const [data, setData] = useState<propertyData>();
  const [loadingState, setLoadingState] = useState(false);
  const [type, settype] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    console.log("Fetching property Data...");
    console.log(type);
    setLoadingState(true);
    getpropertyData(type)
      .then((res) => {
        setError("");
        if (res) {
          console.log(res);
          setData(res);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.error(error);
        setLoadingState(false);
        setData(undefined);
        setError(error);
      });
  };


  const getLogo = (type: string) => {
    switch (type) {
      case "Bungalow":
        return Bungalow;
      case "Toyota":
        return Cottage;
      case "Lamborghini":
        return Flat;
      case "Bugatti":
        return Terraced;
      default:
        return ""; // Default case if no logo is found
    }
  };
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex flex-col w-full p-2 space-y-4">
            <Input
              id="propertyname"
              type="text"
              label="property"
              value={type}
              onChange={(e) => {
                settype(e.target.value);
              }}
            />
            <Button
              className=""
              color="primary"
              isLoading={loadingState}
              type="submit"
            >
              Search
            </Button>
          </div>
        </form>
      </CardHeader>
      <Divider />
      {data ? (
        <CardBody>
                   <div className="flex flex-col items-center">
          <img
              src={getLogo(data.property)} // Get logo based on property
              alt={`${data.property} logo`}
              className="w-40 h-40 mb-4"
            />
            <h1 className="text-3xl font-bold"> {data.type}</h1>
            <p className="text-lg">Buying Price: £{data.buyingprice}</p>
            <p className="text-lg">Selling Price: £{data.sellingprice}</p>
            <p className="text-lg">Rent Price: £{data.rentprice} </p>
  
          </div>
        </CardBody>
      ):(
         <CardBody>
           <div className="flex flex-col items-center">
            <p className="text-xl font-bold">Please enter a type of property </p>
           </div>
         </CardBody>

      )}
      <Divider />

      <CardFooter>
        <div className="flex flex-col items-left">
          {error && <p className="text-xs text-red-600 ">{error}</p>}
          {data && (
            <p className="text-xs  text-gray-600 ">Last update successful.</p>
          )}
          {!data && (
            <p className="text-xs  text-gray-600 ">Waiting for input...</p>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default propertyCard;
