module.exports = {
  env: {
    DISCORD_BOT_TOKEN:
      "<###>OD<###>QzNTk<###>yMjczNDU<###>xNDE3NjQx.<###>YK<###>GGhw.<###>Ocj-n4UBHNu<###>7eLUut<###>NcDRr8<###>yHng",
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Mito9999",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/570383339811504159",
        permanent: true,
      },
      {
        source: "/email",
        destination: "mailto:mitomandev@gmail.com",
        permanent: true,
      },
    ];
  },
};
