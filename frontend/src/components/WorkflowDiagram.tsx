interface WorkflowDiagramProps {
  steps: string[];
  label?: string;
}

/** Shows ordered workflow hand-offs as readable, wrapping HTML steps. */
export function WorkflowDiagram({ steps, label = 'Workflow' }: WorkflowDiagramProps) {
  return (
    <div className="workflow-diagram" role="group" aria-label={label}>
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
