import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="blog-container max-w-7xl mx-auto py-24">
                <div className='px-0 md:px-16 w-10/12  md:w-8/12 mx-auto'>
                    <div className=" bg-fuchsia-200 p-5 rounded mb-20 shadow-lg">
                        <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>Difference between javascript and nodejs ?</h1>
                        <p className='text-left'>JavaScript is a simple programming language that runs in any browser JavaScript Engine.NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++. Nodejs is written in C, C++ and Javascript.</p>
                    </div>
                    <div className="bg-fuchsia-200 p-5 rounded mb-20 shadow-lg">
                        <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>When should you use nodejs and when should you use mongodb ?</h1>
                        <p className='text-left'>There are many web servers built with nodejs that will then use MongoDB for storing data.
                            Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.MongoDB is a technology that's revolutionizing database usage.</p>
                    </div>
                    <div className="bg-fuchsia-200 p-5 rounded mb-20 shadow-lg">
                        <h1 className='w-full bg-gray-100 p-2 text-black text-xl font-mono rounded shadow-lg mb-4'>What is the purpose of jwt and how does it work ?</h1>
                        <p className='text-left'>JWT are mainly used for authentication.After a user logs in to an application, the application will create a JWT and send it back to the user. Subsequent requests by the user will include the JWT. The token tells the server what routes, services, and resources the user is allowed to access.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;