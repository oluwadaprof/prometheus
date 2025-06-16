import { css } from "@panda-ds-ui/styled-system/css";

export default function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        width: "full",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
        height: "100%",
        marginTop: "20%",
      }}
    >
      <h1
        className={css({
          fontSize: "xxx-large",
          fontWeight: "600",
        })}
      >
        PrometheuS
      </h1>
      <p
        className={css({
          color: "text.muted",
          fontStyle: "italic",
         
        })}
      >
        The ultimate enterprise design system starter
      </p>
      <button
        className={css({
          bg: "background.muted",
          py: "2",
          px: "4",
          rounded: "8",
          w: "40",
          mt: '10%',
          color: "text.app",
          _hover: {
            bg: "zinc.800",
            cursor: "pointer",
          },
          _dark: {
            bg: "zinc.800",
          },
        })}
      >
        coming soon
      </button>
    </div>
  );
}
