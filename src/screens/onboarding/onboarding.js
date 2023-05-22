import { OnboardFlow } from "react-native-onboard";

const Onboarding = () => {
  return (
    <OnboardFlow
      pages={[
        {
          title: "Welcome to VET-OK!! app",
          subtitle: "This is page 1",
          imageUri:
            "https://criteriohidalgo.com/wp-content/uploads/2020/01/perro-gato-esterilizacion.jpg",
        },
      ]}
      type="fullscreen"
    />
  );
};

export default Onboarding;
