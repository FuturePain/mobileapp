import { Button } from "react-native";
import { translateIndex } from "../HomeScreen";
import { incrementAndReturnIndex } from "../frameworks/constants";
// To be shared across Content and Module components

export default MoveOnButton = ({ navigation }) => {
  return (
    <Button
      title="Move on →"
      onPress={async () => {
        const contentIndex = await incrementAndReturnIndex();
        const { type, num } = translateIndex(contentIndex);
        if (type == "p") {
          navigation.navigate("Lesson", {
            pageNumber: num + 1,
          });
        } else if (type == "m") {
          navigation.navigate("Module", {
            pageNumber: num + 1,
          });
        } else {
          navigation.navigate("Quiz", { pageNumber: num + 1 });
        }
      }}
    />
  );
};
