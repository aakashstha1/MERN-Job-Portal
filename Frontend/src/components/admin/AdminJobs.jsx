import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { PlusCircle } from "lucide-react";
import AdminJobsTable from "./AdminJobsTable";
import { useGetAllAdminJobs } from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

function AdminJobs() {
  useGetAllAdminJobs();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(setSearchJobByText(filter));
  }, [filter]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange={(e) => setFilter(e.target.value)}
          />
          <Button
            onClick={() => {
              navigate("/admin/jobs/post");
            }}
          >
            <PlusCircle />
            New Job
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
}

export default AdminJobs;
