// Remember in React 18+ we don't need to import React anymore!

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a <table> element, with a <tr> that has 3 <td>
 *         elements for First Name, Last Name, and Appointment Time
 * Step 2: Create another <tr> element that will .map() over this.customersArray
 *         and return 3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Wrap the appropriate sections in a <tbody> <thead> element.
 *
 *         Hint: {customersArray.map((customer, index) => (
 *                    //return your elements here
 *                    //Each <tr> will also need a key={index} property
 *                    ))}
 * 
 * Step 3: Style it with css using the App.css file!
 *
 */

export default function Appointments({customers}) {
    
   let customersArray = customers
  
  
 
    return(
      <table className="appointmentsTable">
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Appointment Time</td>
          </tr>
        </thead>
        <tbody>
          {customersArray.map((customer, index) => (
            <tr key={index} >
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.appointmentTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
