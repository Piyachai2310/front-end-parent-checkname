import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Male.css';

function Male() {
  const [content, setContent] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://precious-exploration-production.up.railway.app/users/0", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const Data = await response.json();
        setContent(Data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log("content: ", content);
  }, [content]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const filteredContent = content.filter((item) => {
    return (
      item.name.toLowerCase().includes(input.toLowerCase()) ||
      item.prefix.toLowerCase().includes(input.toLowerCase())
    );
  });

  return (
    <div className="container p-3 d-flex justify-content-center flex-column">
      <h4 className="text-center">สถานะประจำวันของนักเรียนโครงการ วมว. ปีการศึกษา 2566</h4>
      <div className="row">
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
        <div className="col"></div>
        <div className="col"></div>
        <div className="col-1 card d-flex align-items-center">
          {content.length > 0 ? content[0].Day : 'Loading...'}
        </div>
      </div>
      <div className="row shadow p-2 my-3">
        <table>
          <thead>
            <tr>
              <th scope="col" className="col-1">เลขที่</th>
              <th scope="col" className="col-1">เลขห้องพัก</th>
              <th scope="col" className="col-1">คำนำหน้า</th>
              <th scope="col" className="col-2">ชื่อ-นามสกุล</th>
              <th scope="col" className="col-1">ระดับชั้น</th>
              <th scope="col" className="col-2">สถานะไปเรียน</th>
              <th scope="col" className="col-2">สถานะหอพัก</th>
              <th scope="col" className="col-2">หมายเหตุ สถานะหอพัก</th>
            </tr>
          </thead>
          <tbody>
            {filteredContent.map((item, index) => (
              <tr key={index}>
                <td className="col-1">{item.Id}</td>
                <td className="col-1">ว่าง</td>
                <td className="col-1">{item.prefix}</td>
                <td className="col-2">{item.name}</td>
                <td className="col-1">{item.Year}</td>
                {/* <td className={`col-2 ${item.Morning === "มาเรียน" ? 'bg-light-green' : item.Morning === null ? 'bg-white' : 'background-light-red'}`}>
                  {item.Morning}
                </td> */}
                <td className={`col-2 ${item.Morning === "มาเรียน" ? ' text-success' : item.Morning === null ? 'bg-white' : ' text-danger'}`}>
                  {item.Morning}
                </td>
                {/* <td className={`col-2 ${item.Morning === "มาเรียน" ? 'bg-light-green text-success' : item.Morning === null ? 'bg-white' : 'background-light-red text-danger'}`}>
                  {item.Morning}
                </td> */}
                <td className="col-2">{item.Evening}</td>
                <td className="col-2">{item.Remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Male;
