import { Application, ReflectionKind } from "typedoc";

export function load(app: Application): void {
  app.on(Application.EVENT_VALIDATE_PROJECT, (project) => {
    for (const reflection of project.getReflectionsByKind(
      ReflectionKind.Parameter,
    )) {
      if (reflection.name === "__namedParameters") {
        app.logger.warn(
          `${reflection.getFriendlyFullName()} should be given a friendly name using a @param tag`,
        );
      }
    }
  });
}
