---
sidebar_position: 2
---

# Stake with tonos-cli (advanced)

<!-- ## Download the tonos-cli application

First you will need to download and extract the appropriate version of [tonos-cli](https://github.com/tonlabs/tonos-cli/releases) from EverX Labs’ GitHub. We recommend moving the file (tonos-cli) to a new folder/directory that you will use for working with tonos-cli and storing any associated files.

## Open a terminal and navigate to the directory with the tonos-cli file

Open a terminal window and navigate to the folder that contains the tonos-cli file that you just downloaded. If you don’t know how to open a terminal, here are some guides for the most commonly used operating systems: [Windows 10](https://www.wikihow.com/Open-Terminal-in-Windows), [MacOS](https://www.wikihow.com/Open-a-Terminal-Window-in-Mac). If you don’t know how to navigate directories using a terminal, you can [use this guide](https://www.redhat.com/sysadmin/navigating-filesystem-linux-terminal).  An easier method with MacOS is to [open the terminal in a specific directory using finder](https://ladedu.com/how-to-open-a-terminal-window-at-any-folder-from-finder-in-macos/). A similar option for Windows 10 is also available [using the file explorer](https://superuser.com/questions/1481203/how-to-open-the-windows-terminal-preview-in-file-explorer).

Now that you have a terminal open and have navigated to your tonos-cli working directory, use the following command to check that the tonos-cli file is there **(do not copy the $ in any of the code below)**: 

```bash
ls
```

This will list all files and folders in the directory, and you should see the tonos-cli file listed. If not, use your file explorer to move the file from your downloads directory to your tonos-cli working directory.

3) Make the tonos-cli file executable: Now you have to give yourself execution rights to the tonos-cli file. This is easily done by entering the following command (after entering the command below, you will be prompted to enter you user password):

```bash
sudo chmod +x tonos-cli
```
4) Stake to Custler’s DePool: To stake you will need to enter the following command, but replace your_wallet_address with the address you are sending the stake from and amount_to_stake with the amount you want to stake. Also replace twelve seed phrase words with your twelve words (keep the outside quotes and single space between words). It is recommended that you prepare this command using a text editor or word processor, and then cut/paste the command into the terminal when it is ready. Don’t worry if you make a mistake – you will just get an error (you won’t lose any funds).

The easiest way to get your twelve word passphrase is from ton.surf. Open your account in ton.surf, click theat the top-left and then Safety protection > Master password

```bash
./tonos-cli depool --addr 0:88888984081e2ca8ea2f20e56363ce35b905f98a2b504e38b2952e0af1882a0b stake ordinary --wallet `your_wallet_address` --value amount_to_stake --sign "twelve seed phrase words"
```

The completed command should look similar to the example below (staking 100 TON Crystals):

```bash
./tonos-cli depool --addr 0:88888984081e2ca8ea2f20e56363ce35b905f98a2b504e38b2952e0af1882a0b stake ordinary --wallet 0:7ad43409ab9fa4fe87a7e66d2863ae6d17738978195c591927c37889a584b562 --value 100 --sign "cheese cracker sharp cookie shark river onion tattoo super floor catch wave"
```

In a few seconds, you should see a message that ends with “Processing… Succeeded.” You can now go to ton.live (or ton-explorer.com) to confirm the transaction was completed successfully.

If you are having any issues with any of the steps above, feel free to contact Sergey on Telegram and he will be happy to help.

 

How to withdraw your stake: 

1.1) Partial withdrawal: To withdraw a portion of your stake, enter the following command, but replace your_wallet_address with the address you sent the stake from and amount_to_withdraw with the amount you want to withdraw. Also replace twelve seed phrase words with your twelve words (keep the outside quotes and single space between words).

```bash
$ ./tonos-cli depool --addr 0:88888984081e2ca8ea2f20e56363ce35b905f98a2b504e38b2952e0af1882a0b stake withdrawPart --wallet your_wallet_address --value amount_to_withdraw --sign "twelve seed phrase words"
```
1.2) Full withdrawal: To withdraw all of your stake, enter the following command, but replace your_wallet_address with the address you sent the stake from and replace twelve seed phrase words with your twelve words (keep the outside quotes and single space between words).

```bash
$ ./tonos-cli depool --addr 0:88888984081e2ca8ea2f20e56363ce35b905f98a2b504e38b2952e0af1882a0b withdraw on --wallet your_wallet_address --sign "twelve seed phrase words"
```
After completing 1.1 or 1.2 above, in a few seconds, you should see a message that ends with “Processing… Succeeded.” You can now go to ton.live (or ton-explorer.com) to confirm the withdraw request was completed successfully (you will see 1.000 TON sent to the DePool and 0.962 TON returned). Please note that it can take from 9 Hrs to 36 Hrs  to receive your withdrawal, depending on the timing of the validation rounds, so please be patient.

If you are having any issues with any of the steps above, feel free to contact Sergey on Telegram and he will be happy to help.

For more advanced details on using tonos-cli, please see TON Labs’ documentation.

 

How to check on your stake and rewards (optional):

The easiest way to check on your total stake and rewards balances is to find your address in the DePool participant list.

Alternatively, you can also do this with tonos-cli. To check your stake and rewards balances using tonos-cli, you will first have to download the DePool.abi.json file to you tonos-cli working directory. This can be done with the command below. If you get an error, you may need to install Git and try again. Here are some guides for installing Git on the most commonly used operating systems: Windows 10, MacOS. Make sure to enter the command below while in your tonos-cli working directory:

$ wget https://github.com/tonlabs/ton-labs-contracts/raw/master/solidity/depool/DePool.abi.json
After downloading the DePool.abi.json file to your tonos-cli working directory, you can now check your stake/rewards amounts at any time by using the command below, but replace your_wallet_address with the address you sent the stake from. Please note the the amounts will be shown in nanoTONs (there will be 9 extra zeros).

$ ./tonos-cli run 0:88888984081e2ca8ea2f20e56363ce35b905f98a2b504e38b2952e0af1882a0b getParticipantInfo '{"addr":"your_wallet_address"}' --abi DePool.abi.json

If you have any questions, feel free to contact Sergey on [Telegram](https://t.me/Custler) -->
