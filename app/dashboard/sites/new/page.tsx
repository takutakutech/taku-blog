import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
    return (
        <div className="flex-col flex-1 items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle>投稿作成</CardTitle>
                    <CardDescription>ボタンをクリックして、投稿を作成してください。</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="grid gap-2">
                            <Label>タイトル</Label>
                            <Input placeholder="タイトル"></Input>
                        </div>

                        <div>
                            <Label>サブタイトル</Label>
                            <Input placeholder="サブタイトル"></Input>
                        </div>

                        <div>
                            <Label>投稿内容</Label>
                            <Textarea placeholder="投稿内容"></Textarea>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    )
}