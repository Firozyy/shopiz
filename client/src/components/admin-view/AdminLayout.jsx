import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import AdminSidbar from "./AdminSidbar";

const AdminLayout = () => {
  return (
    <div className="flex max-h-screen w-full">
      <AdminSidbar />
      <div className="flex flex-1 flex-col">
        <AdminHeader />
        <main className="flex-1 flex bg-muted/40 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
