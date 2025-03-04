import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Flex, Skeleton, Button } from "@radix-ui/themes";
import { DropdownMenu } from "radix-ui";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const fallback = user?.name ? user.name[0] : "A";

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <>
      {isLoading && (
        <Flex gap="2">
          <Skeleton>
            <Avatar fallback=""></Avatar>
          </Skeleton>
        </Flex>
      )}

      {isAuthenticated && (
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="IconButton" aria-label="Customise options">
              <Flex gap="2">
                <Avatar
                  src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                  fallback={fallback}
                />
              </Flex>
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={7} 
              align="end" 
              avoidCollisions={true} 
            >
              <DropdownMenu.Item className="DropdownMenuItem">
                {user?.name}
              </DropdownMenu.Item>
              <DropdownMenu.Item className="DropdownMenuItem">
                <Button className="Button" onClick={handleLogout}>
                  Logout
                </Button>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      )}
    </>
  );
};

export default Profile;