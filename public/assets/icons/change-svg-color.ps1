$StringToReplace = 'currentColor'
$Color = "#FAFAFA"

$Files = Get-ChildItem -Path $PSScriptRoot

Write-Output $Files

$Index = 0
$WipeString = $(1..48 | ForEach-Object {" "})

ForEach ($File in $Files) {
	if ($File.Extension -eq '.svg') {
		$OutputPath = Join-Path -Path $PSScriptRoot -ChildPath "white\$($File.Name)"
		
		$Index += 1
		
		Write-Host "`r$WipeString" -NoNewLine
		Write-Host "`r$Index of $($Files.Count - 4): $($File.BaseName)" -NoNewLine
		
		(Get-Content $File) -replace $StringToReplace, $Color | Out-File $OutputPath -Encoding UTF8
	}
}
<#
foreach($file in $files) {
  if(-NOT (($file.BaseName -eq 'export_all_colors')) -or ($file.BaseName -eq 'white')) {
    foreach ($color in $colors) {

    $newFileName = Join-Path -Path $PSScriptRoot -ChildPath "\white\$($file.Basename).svg"
	$newFilePath = "`'$newFileName`'"
    #Write-Output $newFilePath
	Write-Output "(gc *.svg) -replace '$colorToReplace', '$color' | Out-File $newFilePath"
    (Get-Content $file) -replace '$colorToReplace', '$color' | Out-File $newFilePath
    }
  }
}
#>
