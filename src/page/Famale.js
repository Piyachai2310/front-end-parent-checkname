import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Famale() {
  const [content, setContent] = useState([])
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {

        const response = await fetch("https://precious-exploration-production.up.railway.app/users/1", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
        const Data = await response.json()
        setContent(Data)
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, [])


  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const filteredContent = content.filter((item) => {
    return (
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.prefix.toLowerCase().includes(input.toLowerCase())
    );
  });

  useEffect(() => {
    async function check(){
     await console.log("content: " , content);
    }
    check();
  } , [content])

  return (
    <div className="container  p-3 d-flex justify-content-center flex-column ">
      <h4 className='text-center'>สถานะประจำวันของนักเรียนโครงการ วมว. ปีการศึกษา 2566</h4>
      <div className='row'>
      <div className="col">
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 searching" role="search">
            <FaSearch id="search-icon" />
            <input
              type="search"
              className="Input-search"
              placeholder="Search name"
              aria-label="Search"
              onChange={handleInputChange}
            />
          </form>
        </div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col-1 card d-flex align-items-center'>{content.length > 0 ? content[0].Day : 'Loading...'}</div>
      </div>
      <div className='row shadow p-2 my-3'>
        <table >
          <thead>
            <tr>
              <th scope='col' className='col-1'>เลขที่</th>
              <th scope='col' className='col-1'>เลขห้องพัก</th>
              <th scope='col' className='col-1'>คำนำหน้า</th>
              <th scope='col' className='col-2'>ชื่อ-นามสกุล</th>
              <th scope='col' className='col-1'>ระดับชั้น</th>
              <th scope='col' className='col-2'>สถานะไปเรียน</th>
              <th scope='col' className='col-2'>สถานะหอพัก</th>
              <th scope='col' className='col-2'>หมายเหตุ สถานะหอพัก</th>
            </tr>
          </thead>
          <tbody>
            {filteredContent.map((content , index) => (
              <tr key={index}>
                <td className='col-1' >{content.Id}</td>
                <td className='col-1' >ว่าง</td>
                <td className='col-1' >{content.prefix}</td>
                <td className='col-1' >{content.name}</td>
                <td className='col-1' >{content.Year}</td>
                <td className={`col-2 ${content.Morning === "มาเรียน" ? ' text-success' : content.Morning === null ? 'bg-white' : ' text-danger'}`}>
                  {content.Morning}
                </td>
                <td className='col-1' >{content.Evening}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Famale;
