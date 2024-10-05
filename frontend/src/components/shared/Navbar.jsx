import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from '../ui/button';
import { LogOut, User2 } from 'lucide-react';

const Navbar = () => {

  const user = false;

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#f83002]">Portal</span>{" "}
          </h1>
        </div>

        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/browse">Browse</Link></li>
          </ul>

          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link to="/signup">
                <Button className="bg-[#6A38c2] hover:bg-[#49179f]">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                    className="w-[40px] h-[40px] rounded-full"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div>
                  <div className="flex gap-2 space-y-2">
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                        className="w-[40px] h-[40px] rounded-full"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Patel MernStack</h4>
                      <p className="text-sm text-muted-foreground">
                        Lorem ipsum
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </div>

                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <LogOut />
                      <Button variant="link">Logout</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar