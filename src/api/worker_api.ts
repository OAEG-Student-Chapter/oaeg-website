interface LaunchDTO {
    isLaunched: boolean;
    isLaunchActive: boolean;
}

class WorkerApi {
    private isLaunched: boolean = false;
    private isLaunchActive: boolean = false;
    private readonly baseUrl: string;
  
    constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

    async getIsLaunched(){
      const endpoint = this.baseUrl + "/read"
      const res = await fetch(
        endpoint,
        {next: { revalidate: 3600 }}
      );
      const stringValue = (await res.json()).isLaunched;
      this.isLaunched = stringValue === "true";
      return this.isLaunched;
    }

    async getIsLaunchActive() {
      const endpoint = this.baseUrl + "/read"
      const res = await fetch(
        endpoint,
        {next: { revalidate: 3600 }}
      );
      const stringValue = (await res.json()).isLaunchActive;
      this.isLaunchActive = stringValue === "true";
      return this.isLaunchActive;
    }

    async read():Promise<LaunchDTO> {
        const endpoint = this.baseUrl + "/read"
        const res = await fetch(
            endpoint,
            {next: { revalidate: 3600 }}
        );
        // convert jsonStr to json object
        const jsonStr = await res.json();
        return {
            isLaunched: jsonStr.isLaunched === "true",
            isLaunchActive: jsonStr.isLaunchActive === "true"
        };
    }

    async activateLaunch() {
      const endpoint = this.baseUrl + "/activate"
      const res = await fetch(
        endpoint
      );
      if (res.status === 200) {
        this.isLaunchActive = true;
      }
      return this.isLaunchActive;
    }

    async launchApp() {
      const endpoint = this.baseUrl + "/launch"
      const res = await fetch(
        endpoint
      );
      if (res.status === 200) {
        this.isLaunched = true;
      }
      return this.isLaunched;
    }
}

export const worker = new WorkerApi(
    "https://worker-gentle-dew-803b.oaegstudentchap.workers.dev"
);
