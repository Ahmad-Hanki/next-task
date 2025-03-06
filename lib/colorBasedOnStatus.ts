const colorBasedOnStatus = (status: StatusType) => {
  if (status == "Alive") return "bg-green-500";
  else if (status == "Dead") return "bg-red-500";
  else return "bg-yellow-500";
};

export default colorBasedOnStatus;
