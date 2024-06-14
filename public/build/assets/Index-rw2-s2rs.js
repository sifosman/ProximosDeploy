import{j as e,a as c,Y as g,y as i}from"./app-_52EEPm8.js";import{T as a,P as j}from"./TableHeading-Bb-Dbtbc.js";import{T as h}from"./TextInput-cVLMXGXe.js";import{A as f}from"./AuthenticatedLayout-lSSVXAu6.js";import"./ApplicationLogo-Df3tCkPK.js";import"./transition-1w86UXvJ.js";function k({auth:m,users:n,queryParams:s=null,success:o}){s=s||{};const l=(t,r)=>{r?s[t]=r:delete s[t],i.get(route("user.index"),s)},x=(t,r)=>{r.key==="Enter"&&l(t,r.target.value)},d=t=>{t===s.sort_field?s.sort_direction==="asc"?s.sort_direction="desc":s.sort_direction="asc":(s.sort_field=t,s.sort_direction="asc"),i.get(route("user.index"),s)},p=t=>{window.confirm("Are you sure you want to delete the user?")&&i.delete(route("user.destroy",t.id))};return e.jsxs(f,{user:m.user,header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Users"}),e.jsx(c,{href:route("user.create"),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add new"})]}),children:[e.jsx(g,{title:"Users"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[o&&e.jsx("div",{className:"bg-emerald-500 py-2 px-4 text-white rounded mb-4",children:o}),e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsxs("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:[e.jsx("div",{className:"overflow-auto",children:e.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx(a,{name:"id",sort_field:s.sort_field,sort_direction:s.sort_direction,sortChanged:d,children:"ID"}),e.jsx(a,{name:"name",sort_field:s.sort_field,sort_direction:s.sort_direction,sortChanged:d,children:"Name"}),e.jsx(a,{name:"email",sort_field:s.sort_field,sort_direction:s.sort_direction,sortChanged:d,children:"Email"}),e.jsx(a,{name:"created_at",sort_field:s.sort_field,sort_direction:s.sort_direction,sortChanged:d,children:"Create Date"}),e.jsx("th",{className:"px-3 py-3 text-right",children:"Actions"})]})}),e.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500",children:e.jsxs("tr",{className:"text-nowrap",children:[e.jsx("th",{className:"px-3 py-3"}),e.jsx("th",{className:"px-3 py-3",children:e.jsx(h,{className:"w-full",defaultValue:s.name,placeholder:"User Name",onBlur:t=>l("name",t.target.value),onKeyPress:t=>x("name",t)})}),e.jsx("th",{className:"px-3 py-3",children:e.jsx(h,{className:"w-full",defaultValue:s.email,placeholder:"User Email",onBlur:t=>l("email",t.target.value),onKeyPress:t=>x("email",t)})}),e.jsx("th",{className:"px-3 py-3"}),e.jsx("th",{className:"px-3 py-3"})]})}),e.jsx("tbody",{children:n.data.map(t=>e.jsxs("tr",{className:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[e.jsx("td",{className:"px-3 py-2",children:t.id}),e.jsx("th",{className:"px-3 py-2 text-gray-100 text-nowrap",children:t.name}),e.jsx("td",{className:"px-3 py-2",children:t.email}),e.jsx("td",{className:"px-3 py-2 text-nowrap",children:t.created_at}),e.jsxs("td",{className:"px-3 py-2 text-nowrap",children:[e.jsx(c,{href:route("user.edit",t.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1",children:"Edit"}),e.jsx("button",{onClick:r=>p(t),className:"font-medium text-red-600 dark:text-red-500 hover:underline mx-1",children:"Delete"})]})]},t.id))})]})}),e.jsx(j,{links:n.meta.links})]})})]})})]})}export{k as default};
