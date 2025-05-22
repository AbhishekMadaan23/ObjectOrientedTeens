import React from 'react'

const BlogSection = () => {
const blogs = [
  {
    title: "Demystifying JavaScript Closures",
    author: "Jane Doe",
    date: "May 20, 2025",
    content: "Closures allow JavaScript functions to access variables from an outer scope, even after that scope has closed. They're a powerful concept used in callbacks, currying, and encapsulation techniques."
  },
  {
    title: "A Beginner's Guide to Docker",
    author: "John Smith",
    date: "May 18, 2025",
    content: "Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. This guide walks through the basics of Docker images, containers, volumes, and networking."
  },
  {
    title: "Understanding React Server Components",
    author: "Emily Johnson",
    date: "May 15, 2025",
    content: "React Server Components are a new way to build modern web apps with better performance and reduced JavaScript. Learn how they differ from traditional components and how to integrate them in Next.js.Closures allow JavaScript functions to access variables from an outer scope, even after that scope has closed. They're a powerful concept used in callbacks, currying, and encapsulation techniques.Closures allow JavaScript functions to access variables from an outer scope, even after that scope has closed. They're a powerful concept used in callbacks, currying, and encapsulation techniques.Closures allow JavaScript functions to access variables from an outer scope, even after that scope has closed. They're a powerful concept used in callbacks, currying, and encapsulation techniques."
  }
];

 return (
 <div className="py-3 px-4">
  <div className="text-white font-semibold text-xl mb-4 text-center md:text-start">
    TECH BLOGS
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs.map((blog, index) => (
      <div
        key={index}
        className="w-full h-full min-h-[220px] p-4 text-white bg-gradient-to-br from-blue-800/30 to-purple-800/30 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
      >
        <p className="text-lg font-semibold tracking-wide hover:underline mb-2">
          {blog.title}
        </p>
        <p className="text-sm text-gray-300 mb-3">
          {blog.author} &middot; {blog.date}
        </p>
        <p className="text-sm text-gray-200 line-clamp-3">
          {blog.content}
        </p>
      </div>
    ))}
  </div>
</div>


);


}

export default BlogSection