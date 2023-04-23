var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      if(customerList.filter(customer => customer[0] == CustomerId).length === 0){
            let customer = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category];
            customerList.push(customer);
      }
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      // Write the Logic here
      customerList.forEach(customer => {
            if(customer[0] == CustomerId){
                  customer[1] = CustomerName;
                  customer[2] = CustomerAge;
                  customer[3] = CustomerAddress;
                  customer[4] = CustomerContactNumber;
                  customer[5] = Category;
            }
      })
}

const getAllCustomers=()=>{
  // Write the Logic here
  return customerList;
}

module.exports={addCustomer,updateCustomer,getAllCustomers}