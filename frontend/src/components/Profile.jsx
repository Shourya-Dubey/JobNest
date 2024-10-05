import React from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";

const skills = ["Html", "Css", "JavaScript", "Reactjs"];

const Profile = () => {
  const isResume = true;

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
                width="40px"
                height="40px"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>This solution alternates elements from the two vectors</p>
            </div>
          </div>
          <Button className="text-right" varient="outline">
            <Pen />
          </Button>
        </div>

        <div className="my-5 items-center">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>Ravi@gmail.com</span>
          </div>

          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>7887655643</span>
          </div>
        </div>

        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-2 mt-2">
            {skills.length != 0 ? (
              skills.map((item, index) => <Badge key={index}>{item}</Badge>)
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-semibold">Resume</Label>
          {isResume ? (
            <a
              target="blank"
              href="https://youtube.com"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              youtube
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Profile;
