import { UTApi } from "uploadthing/server";

export const dynamic = 'force-dynamic';

export default async function MediaLibraryPage() {
  let fileList: any = [];
  let errorMsg = null;
  
  try {
    const utapi = new UTApi();
    const res = await utapi.listFiles();
    fileList = Array.isArray(res) ? res : res?.files || [];
  } catch (e: any) {
    console.warn("UploadThing Error", e);
    errorMsg = "Unable to fetch media. Have you set UPLOADTHING_TOKEN in your environment variables?";
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
      {errorMsg ? (
        <div className="p-4 bg-yellow-50 text-yellow-800 border-l-4 border-yellow-400 rounded-md">
           {errorMsg}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {fileList.map((f: any) => (
            <div key={f.id} className="border rounded-lg p-3 flex flex-col items-center shadow-sm bg-white overflow-hidden">
              <img 
                src={`https://utfs.io/f/${f.key}`} 
                alt={f.name} 
                className="w-full h-32 object-cover rounded-md mb-3" 
              />
              <p className="text-xs truncate w-full text-center text-muted-foreground" title={f.name}>
                  {f.name}
              </p>
            </div>
          ))}
          {fileList.length === 0 && (
            <p className="text-muted-foreground col-span-full">No media uploaded yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
