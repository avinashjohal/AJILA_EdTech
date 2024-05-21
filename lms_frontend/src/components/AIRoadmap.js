import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const baseUrl = "http://127.0.0.1:8000/api";
function AIRoadmap() {
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [roadmap, setRoadmap] = useState(null);

    useEffect(() => {
        document.title = "AJILA | AI-Roadmap Page"; // Adding custom background color
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}/ai-roadmap/?type=${type}&name=${name}`);
            const data = await response.json();
            setRoadmap(data);
        } catch (error) {
            console.error('Error fetching roadmap:', error);
        }
    };

    useEffect(() => {
        document.title = "AJILA | AI-Roadmap Page"; // Adding custom background color
    }, []);

    return (

        <div style={{ backgroundColor: 'black', minHeight: '120vh' }}>
            <div className='text-white p-5'>
                <h1 className='text-center '>AII Roadmap</h1>
                <h6 className='text-center text-success'>Find All Roadmaps Here...!</h6>
            </div>
            <h5 className="my-4 text-center text-white"><span className="py-2 px-4 border rounded-2 border-secondary">Skill based Roadmaps</span></h5>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <button type="button" className="btn btn-light m-2 px-1 "><Link target='_blank' to='https://roadmap.sh/ai-data-scientist' className='text-decoration-none text-dark mx-2'>AI & Data Science</Link> | <Link to='http://localhost:3000/detail/1' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Course Link"><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/system-design' className='text-decoration-none text-dark mx-2'>System Design</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/java' className='text-decoration-none text-dark mx-2'>Java</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/python' className='text-decoration-none text-dark mx-2'>Python</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/cpp' className='text-decoration-none text-dark mx-2'>C++</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/rust' className='text-decoration-none text-dark mx-2'>Rust</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/react' className='text-decoration-none text-dark mx-2'>React</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/angular' className='text-decoration-none text-dark mx-2'>Angular</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/vue' className='text-decoration-none text-dark mx-2'>Vue</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/nodejs' className='text-decoration-none text-dark mx-2'>Node.js</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/javascript' className='text-decoration-none text-dark mx-2'>JavaScript</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/sql' className='text-decoration-none text-dark mx-2'>SQL</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
            </div>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/mongodb' className='text-decoration-none text-dark mx-2'>Mongo DB</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/aws' className='text-decoration-none text-dark mx-2'>AWS</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/datastructures-and-algorithms' className='text-decoration-none text-dark mx-2'>Data Structures & Algorithms</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
                <button type="button" className="btn btn-light m-2 px-1 "><Link to='https://roadmap.sh/linux' className='text-decoration-none text-dark mx-2'>Linux</Link> | <Link to='http://localhost:3000/detail/1'><i className="bi bi-box-arrow-up-right mx-2"></i></Link></button>
            </div>

            <div className='text-white p-5'>
                <h5 className='text-center'>AI Roadmap Generator</h5>
                <form onSubmit={handleSubmit} className='d-flex flex-column align-items-center'>
                    <label className='mb-2'>
                        Type:
                        <select value={type} onChange={(e) => setType(e.target.value)} className='ml-2'>
                            <option value="">Select Type</option>
                            <option value="skill">Skill</option>
                            <option value="role">Role</option>
                        </select>
                    </label>
                    <label className='mb-2'>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='ml-2'
                        />
                    </label>
                    <button type="submit" className='btn btn-success mt-2'>Generate Roadmap</button>
                </form>

                {roadmap && (
                    <div className='mt-5'>
                        <h2 className='text-center'>{roadmap.name} Roadmap</h2>
                        <ul className='list-group'>
                            {roadmap.steps.map((step, index) => (
                                <li key={index} className='list-group-item'>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                    {step.resources && (
                                        <ul>
                                            {step.resources.map((resource, idx) => (
                                                <li key={idx}>{resource}</li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AIRoadmap;