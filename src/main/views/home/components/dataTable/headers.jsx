export const columns = [
  { name: "ID", selector: (row) => row.serial_number , sortable: true },
  { name: "First Name", selector: (row) => row.first_name, sortable: true },
  { name: "Last Name", selector: (row) => row.last_name , sortable: true },
 
  { 
    name: 'Status',
    selector: (row) => row.status,
    conditionalCellStyles: [
      {
        when: (row) => row.status === 'NON PAID',
        style: {
          backgroundColor: '#F05151',
         
        },
      },
    ],
  },

];
  