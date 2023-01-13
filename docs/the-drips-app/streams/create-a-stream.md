---
id: create-a-stream
title: Create a stream
---

This guide assumes that you've already <a href="/docs/the-drips-app/manage-funds/add-funds" target="_blank">added ERC-20 funds to your *outgoing balance*</a>. If you haven't yet, please do so before attempting to create a stream.

Now that you have some outgoing balance available to stream to others, click "Create stream" on your dashboard.

![Clicking "Create Stream" on the Drips App Dashboard](/img/drips-app/create-stream/1.png)

This opens the "Create Stream"-modal. Here, simply populate the stream name, recipient, token, and token amount you'd like to stream. The stream name and stream rate may be <a href="/docs/the-drips-app/streams/edit-a-stream" target="_blank">edited freely after stream creation</a>. You can delete any of your streams later at any time too.

![The "Create Stream"-Modal](/img/drips-app/create-stream/2.png)

By default, you're creating an "open-ended" stream, which will simply continue streaming until your outgoing balance for the particular token runs out. Of course, you can always add additional funds and keep the stream running.

If you want, you can alternatively specify explicit start- and end times for your stream. If you do so, the stream will appear as "Scheduled" until the exact second you specified as the start time, then become "Active", and eventually end automatically at exactly the intended end time. This allows you to stream exactly a pre-set amount over a specific time-frame. With the below configuration for example, the resulting stream would stream exactly 0.1 RAD over exactly thirty days.

![Specifying start- and end dates on the "Create Stream"-Modal](/img/drips-app/create-stream/3.png)

Please ensure that you specify a start time that is distant enough in the future to go into effect after the stream creation transaction is confirmed. Streams that are established on-chain *after* their set start date will start streaming only in the exact moment they're confirmed on-chain.

Once the transaction is confirmed, your new stream appears on your dashboard, and you can immediately see its balance changing in real-time. If you scheduled a stream for the future, you'll see it as an outgoing stream, but it'll only start streaming at the intended start date. If your stream doesn't immediately appear, please refresh the app a few times, as it sometimes might take a short while for it to update.

![Specifying start- and end dates on the "Create Stream"-Modal](/img/drips-app/create-stream/4.png)

Clicking on a stream brings up the stream view, which displays additional details about the stream in real-time. From here, you can also pause, edit or delete your stream, which you'll learn about in the next chapter.

> ℹ️ You can share your stream details publicly by just sharing the stream's URL.
