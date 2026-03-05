import * as React from "react";

interface InlineEditorProps {
  id: string;
  value: string;
  props: any;
  sanitizedHtml: { __html: string };
  componentId: string;
}

type InlineEditorComponent = React.ComponentType<InlineEditorProps>;

const DefaultInlineEditor: InlineEditorComponent = ({ sanitizedHtml, id }) => {
  return React.createElement("span", {
    dangerouslySetInnerHTML: sanitizedHtml,
    id: id,
  });
};

let _InlineEditor: InlineEditorComponent = DefaultInlineEditor;

export function setInlineEditor(editor: InlineEditorComponent) {
  _InlineEditor = editor;
}

export function getInlineEditor(): InlineEditorComponent {
  return _InlineEditor;
}

export type { InlineEditorProps, InlineEditorComponent };
