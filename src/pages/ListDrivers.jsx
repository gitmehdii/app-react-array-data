import F1Drivers from '../data/F1Drivers'; 

function ListDrivers() {
  return (
    <div className='main-content'>
      
      <ul>
  { F1Drivers.map((driver, index) => (
     <li key={index}> {driver.firstName} {driver.lastName}</li>
  ))}
</ul>
    </div>
  );
}

export default ListDrivers;