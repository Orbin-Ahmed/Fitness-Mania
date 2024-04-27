import { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat?: any;
  }
}

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Fitness Mania Assistant",
        botConversationDescription: "I'm here to help you",
        botId: "e7557a2e-5eba-45b5-a3b8-daacd5f43a6c",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "e7557a2e-5eba-45b5-a3b8-daacd5f43a6c",
        webhookId: "a7ad772a-bdce-4636-b662-6f26be4ab4ea",
        lazySocket: true,
        themeName: "prism",
        botName: "Fitness Mania Assistant",
        avatarUrl: "https://avatar.iran.liara.run/public/job/operator/male",
        phoneNumber: "+971 56 891-4066",
        emailAddress: "acantoahmed67@gmail.com",
        website: "https://fitness-mania-phi.vercel.app/",
        stylesheet:
          "https://webchat-styler-css.botpress.app/prod/code/49e0afd9-b2b3-4524-ad3f-d90bcc4d2530/v21835/style.css",
        frontendVersion: "v1",
        useSessionStorage: true,
        theme: "prism",
        themeColor: "#2563eb",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;
