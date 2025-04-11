type ComposerEmbededLinkProps = {
    url: string;
  };
  
  export function ComposerEmbededLink({ url }: ComposerEmbededLinkProps): React.JSX.Element {
    return <div dangerouslySetInnerHTML={{ __html: url }} />;
  }
  