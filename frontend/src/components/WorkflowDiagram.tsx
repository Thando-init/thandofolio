interface WorkflowDiagramProps {
  steps: string[];
}

/** Shows the salon request's ordered hand-offs as readable, wrapping HTML steps. */
export function WorkflowDiagram({ steps }: WorkflowDiagramProps) {
  return (
    <div className="workflow-diagram" aria-label="Salon booking workflow">
      <h4>How the workflow connects</h4>
      <ol>
        {steps.map((step, index) => (
          <li key={step}>
            <span className="workflow-diagram__number">0{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
