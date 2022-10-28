// import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/88e41ea5-31ab-4219-afa2-fafd7461d00f/d424vhr-8a05a5d7-6b96-4303-89a1-16b5a2020f37.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4ZTQxZWE1LTMxYWItNDIxOS1hZmEyLWZhZmQ3NDYxZDAwZlwvZDQyNHZoci04YTA1YTVkNy02Yjk2LTQzMDMtODlhMS0xNmI1YTIwMjBmMzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3q9aMP7iSc1Y9HiPQg6CQ3exmlWAqq2iWD-jDUbB2bA"
          className="App-logo"
          alt="logo"
        />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
