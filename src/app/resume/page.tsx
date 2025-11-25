import React from "react";
import { Row, Text } from "@once-ui-system/core";

const ResumePage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Header */}
      <Row gap="12" vertical="center">
        <Text variant="heading" size="4xl" weight="bold">
          Resume
        </Text>
      </Row>

      {/* Embed PDF */}
      <div style={{ marginTop: "2rem", width: "100%", height: "90vh" }}>
        <iframe
          src="/resume_final.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default ResumePage;
